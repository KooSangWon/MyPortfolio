<template>
  <section class="section">
    <div class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">구상원의 포트폴리오</h1>
          <br>
          <h2 class="subtitle">목원대학교 정보통신융합공학부</h2>
        </div>
      </div>
    </div>
    <br>

<div class="tabs is-toggle is-fullwidth">
  <ul>
    <li>
      <nuxt-link to="/">
        <span class="icon is-small"><i class="fas fa-home" aria-hidden="true"></i></span>
        <span>메인페이지</span>
      </nuxt-link> 
    </li>
    <li>
      <nuxt-link to="/profile">
        <span class="icon is-small"><i class="fas fa-user" aria-hidden="true"></i></span>
        <span>프로필</span>
      </nuxt-link> 
    </li>
    <li>
      <nuxt-link to="/work">
        <span class="icon is-small"><i class="fas fa-book" aria-hidden="true"></i></span>
        <span>자기개발</span>
      </nuxt-link> 
    </li>
    <li>
      <nuxt-link to="/award">
        <span class="icon is-small"><i class="far fa-star" aria-hidden="true"></i></span>
        <span>수상 이력</span>
      </nuxt-link> 
    </li>
  </ul>
</div>

<nuxt/>

<footer class="footer">
  <div class="content has-text-centered">
    <p>
      made by <strong>Koo Sang Won</strong> <br>Mokwon University<br>E-Portfolio
    </p>
  </div>
</footer>

  </section>
</template>