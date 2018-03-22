import Vue from 'vue';
import VueRouter from 'vue-router';

import commentBox from '../component/comment-box.vue'
import userComment from '../component/user-comment.vue'

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: commentBox
  },
  {
    name: 'user',
    path: '/user:user',
    component: userComment
  },
];

const router = new VueRouter({
  routes
});

export default router;
