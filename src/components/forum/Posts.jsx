import React, { useEffect, useState } from 'react';
import PostList from './forumComps/PostList';
import PostForm from './forumComps/PostForm';
import PostFilter from './forumComps/PostFilter';
import MyButton from '../UI/button/MyButton';
import MyModal from '../UI/MyModal/MyModal';
import Loader from '../UI/Loader/Loader';
import Pagination from '../UI/pagination.jsx/pagination';
import { usePosts } from '../../hooks/usePosts';
import PostService from '../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import { getPageCount } from './utils/pages';

import './Forum.css'

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);



  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])

    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  useEffect(() => {
    fetchPosts()
  }, [page])

  const changePage = (page) => {
    setPage(page);
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Создать новую тему</MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>


      <hr style={{ margin: '20px' }} />

      <PostFilter filter={filter} setFilter={setFilter}/>

      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
      
      {postError && <h1 style={{ textAlign: 'center' }}>Произошла ошибка</h1>}
      {isPostsLoading
        ? <Loader />
        : <PostList posts={sortedAndSearchedPosts} remove={removePost} title='Список тем' />
      }
    </div>
  );
}

export default Posts;