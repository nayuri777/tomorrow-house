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
