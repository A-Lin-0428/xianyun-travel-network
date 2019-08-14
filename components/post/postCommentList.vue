
<template>
  <div class="detaillist">
    <div class="list" v-if="comments.length">
      <div class="item" v-for="(item,i) in comments" :key="i+Math.random(100)">
        <span class="index">{{item|findex}}</span>
        <div class="user">
          <img class="head" src="http://127.0.0.1:1337/assets/images/avatar.jpg" />
          <span class="name">{{item.account.nickname}}</span>
          <span class="time">{{item.updated_at|update}}</span>
          <div class="comment">
            <dlitem v-if="item.parent" :item="item.parent" @reply="reply" :index="item|index" />
            <p>
              {{item.content}}
              <span class="replybtn" @click="reply(item)">回复</span>
            </p>
            <div class="img" v-if="item.pics.length">
              <div
                :style="`background-image: url('http://157.122.54.189:9095${item.pics[0].url}');`"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nocomments" v-else>
      空空如也，快去
      <span @click="$emit('tocommentposition')">评论</span>吧~
    </div>
    <el-row class="pagination" type="flex" justify="center">
      <el-pagination
        @size-change="sizechange"
        @current-change="pagechange"
        :current-page="page._start"
        :page-sizes="[1,2,4,6,8,50]"
        :page-size="page._limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-row>
  </div>
</template>

<script>
import moment from "moment";

import dlitem from "@/components/post/postCommentItem";


export default {
  // 父传子
  props: {
    success: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // 评论数据
      comments: [],
      // 分页数据
      page: {
        post: 0,
        _start: 1,
        _limit: 2
      },
      total: 0
    };
  },
  // 方法
  methods: {
    // 回复
    reply(item) {
      let user = item.account;
      user.ryid = item.id;
      this.$emit("greplyuser", user);
    },
    // 分页方法
    // 显示条数改变
    sizechange(size) {
      this.page._limit = size;
      this.getcomments();
    },
    // 当前页码改变
    pagechange(pagenum) {
      this.page._start = pagenum;
      this.getcomments();
    },
    // 获取评论
    getcomments() {
      let params = { ...this.page };
      params._start = params._start - 1;
      this.$axios({
        url: '/posts/comments',
        method: 'GET',
        params
      }).then(res => {
        // console.log(res)
        this.total = res.data.total;
        this.comments = res.data.data;
      })
    }
  },
  // 过滤器
  filters: {
    // 计算parent个数
    index(item) {
      let index = 0;
      while (item.parent) {
        ++index;
        item = item.parent;
      }
      return index;
    },
    findex(item) {
      let index = 1;
      while (item.parent) {
        ++index;
        item = item.parent;
      }
      return index;
    },
    update(time) {
      return moment(time).format("YYYY-MM-DD HH:mm");
    }
  },
  // 侦听
  watch: {
    success(n, o) {
      if (n === "OK") {
        this.$emit("success", "");
        this.page._start = 1;
        this.getcomments();
      }
    }
  },
  // 钩子函数
  mounted() {
    this.page.post = this.$route.query.id;
    this.getcomments();
  },
  components: {
    dlitem
  }
};
</script>

<style lang='less' scoped>
.detaillist {
  .nocomments {
    height: 100px;
    margin-top: 25px;
    font-size: 13px;
    border: 1px dashed #ddd;
    color: #666;
    background-color: whitesmoke;
    text-align: center;
    line-height: 100px;
    border-radius: 5px;
    span {
      color: royalblue;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .list {
    padding: 10px 20px;
    margin-top: 25px;
    border: 1px solid #ddd;
    .item {
      position: relative;
      margin-top: 10px;
      border-bottom: 1px dotted #ddd;
      &:last-child {
        border-bottom: none;
      }
      // 索引
      .index {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 12px;
        color: #ccc;
      }
      // 用户信息
      .user {
        line-height: 20px;
        font-size: 12px;
        img {
          vertical-align: middle;
        }
        .head {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
        .name {
          color: #333;
        }
        .time {
          color: #666;
        }
        .comment {
          margin: 5px 0;
          padding-left: 20px;
          // 回复
          .replybtn {
            display: none;
            position: absolute;
            bottom: 3px;
            right: 1px;
            font-size: 12px;
            color: royalblue;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }

          > p {
            margin-top: 15px;
            font-size: 14px;
            color: black;
            &:hover .replybtn {
              display: block;
            }
          }
          .img {
            width: 90px;
            height: 90px;
            padding: 6px;
            border: 1px dashed #ddd;
            border-radius: 5px;
            > div {
              overflow: hidden;
              width: 76px;
              height: 76px;

              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
            }
          }
        }
      }
    }
  }
  .pagination {
    margin: 20px 0 15px;
  }
}
</style>
