const orderCta = document.querySelector('.order-cta')
const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')
const [orderBookMarkButton, orderCtaBuyButton] = orderCta.children

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

function toggleOrderCtaBookMark() {
  const [icon, countSpan] = this.children

  const count = Number(countSpan.innerHTML.replaceAll(',', ''))

  let newCount = count

  if (this.classList.contains('is-active')) {
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmarkFilled')
    newCount -= 1
  } else {
    icon.classList.remove('ic-bookmark')
    icon.classList.add('ic-bookmarkFilled')
    newCount += 1
  }

  this.classList.toggle('is-active')
  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크${newCount.toLocaleString()}회`)
}

orderCtaBuyButton.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)
orderBookMarkButton.addEventListener('click', toggleOrderCtaBookMark)

// const orderCta = document.querySelector('.order-cta')
// const [orderBookmarkButton, orderCtaBuyButton] = orderCta.children

// const orderModal = document.querySelector('.order-form-modal')
// const orderModalOverlay = document.querySelector('.overlay')

// function openOrderModal() {
//   orderModal.classList.add('is-open')
//   orderModalOverlay.classList.add('is-active')
// }

// orderCtaBuyButton.addEventListener('click', openOrderModal)

// function closeOrderModal() {
//   orderModal.classList.remove('is-open')
//   orderModalOverlay.classList.remove('is-active')
// }

// orderModalOverlay.addEventListener('click', closeOrderModal)

// function toggleOrderCtaBookmark() {
//   const [icon, countSpan] = this.children
//   const count = Number(countSpan.innerHTML.replaceAll(',', ''))

//   let newCount = count

//   if (this.classList.contains('is-active')) {
//     icon.classList.add('ic-bookmark')
//     icon.classList.remove('ic-bookmarkFilled')
//     newCount -= 1
//     //newCount = newCount - 1
//   } else {
//     icon.classList.add('ic-bookmarkFilled')
//     icon.classList.remove('ic-bookmark')
//     newCount += 1
//     //newCount = newCount + 1
//   }

//   this.classList.toggle('is-active')
//   countSpan.innerHTML = newCount.toLocaleString()
//   countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()} 회`)
// }

// orderBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
