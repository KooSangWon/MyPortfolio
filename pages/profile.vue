<template>
  <section class="container">
   <p class="title is-1 is-spaced">프로필</p>
   <br>
   
   <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-128x128">
        <img src="profile.jpg" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
       <table class="table">
  <thead>
    <tr>
      <th><abbr title="Name">Name</abbr></th>
      <th><abbr title="Age">Age</abbr></th>
      <th><abbr title="University">University</abbr></th>
      <th><abbr title="Major">Major</abbr></th>
      <th><abbr title="Phone">Phone</abbr></th>
      <th><abbr title="E-mail">E-mail</abbr></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>구상원</th>
      <td>25</td>
      <td>Mokwon University</td>
      <td>Information and Communication</td>
      <td>010.7697.**** </td>
      <td>gsw0931@gmail.com</td>
    </tr>
  </tbody>
</table>
    </div>

    </div>
  </article>
</div>

  <article class="message">
    <div class="message-header">언어 이해도</div>
      <div class="message-body">
        <div id="chart"></div>
      </div>
    </article>
  </section>
</template>

<script>
    import myBarChart from '~/plugins/chart';
    export default{
        mounted(){
            if(process.client) {myBarChart('chart');}
        }
    };
</script>
