# 내일의 집

[오늘의 집 클론 내일의 집 제품 상세페이지 (https://nayul3090.cafe24.com/tomorrowHouse/Public/index.html)

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button
    class="gnb-search-button is-search gnb-icon-button lg-hidden"
    type="button"
    aria-lable="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>
  <a href="/" class="gnb-icon-button is-cart" aria-lable="장바구니로 이동">
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="button-group">
  <button
    class="gnb-search-button is-search gnb-icon-button lg-hidden"
    type="button"
    aria-lable="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-lable="스크랩북 페이지로 이동"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-lable="내소식 페이지로 이동"
  >
    <i class="ic-bell"></i>
  </a>

  <a href="/" class="gnb-icon-button is-cart" aria-lable="장바구니로 이동">
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="마이메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="./asset/images/img-user-01.jpg" alt="사딸라아저씨" />
    </div>
  </button>
</div>
```
