const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')
const HeaderOffSetDeskTop = 80 + 50 + 54
const HeaderOffSetMobile = 50 + 40 + 40
let currentTab = productTab.querySelector('.is-active')
let disabledUpdating = false

function activeTab() {
  const tabItem = this.parentNode

  if (tabItem !== currentTab) {
    disabledUpdating = true
    tabItem.classList.add('is-active')
    currentTab.classList.remove('is-active')
    currentTab = tabItem

    setTimeout(() => {
      disabledUpdating = false
    }, 1000)
  }
}

function scrollTab() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)
  const tabAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 786 ? HeaderOffSetDeskTop : HeaderOffSetMobile)

  window.scrollBy({
    top: tabAmount,
    behavior: 'smooth',
  })
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', activeTab)
  button.addEventListener('click', scrollTab)
})

const productTabIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]

const productTabPanelList = productTabIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`)
  return tabPanel
})

const productPositionMap = {}

function detectPanelPosition() {
  productTabPanelList.forEach((panel) => {
    const id = panel.getAttribute('id')
    const position = window.scrollY + panel.getBoundingClientRect().top
    productPositionMap[id] = position
  })

  updateActiveTabOnScroll()
}

function updateActiveTabOnScroll() {
  if (disabledUpdating == true) {
    return
  }
  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 786
      ? HeaderOffSetDeskTop + 80
      : HeaderOffSetMobile + 8)

  let newActiveTab

  if (scrolledAmount >= productPositionMap['product-recommendation']) {
    newActiveTab = productTabButtonList[4]
  } else if (scrolledAmount >= productPositionMap['product-shipment']) {
    newActiveTab = productTabButtonList[3]
  } else if (scrolledAmount >= productPositionMap['product-inquiry']) {
    newActiveTab = productTabButtonList[2]
  } else if (scrolledAmount >= productPositionMap['product-review']) {
    newActiveTab = productTabButtonList[1]
  } else {
    newActiveTab = productTabButtonList[0]
  }

  const bodyHeight =
    document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0)
  if (window.scrollY + window.innerHeight === bodyHeight) {
    newActiveTab = productTabButtonList[4]
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode

    if (newActiveTab !== currentTab) {
      newActiveTab.classList.add('is-active')

      if (currentTab !== null) {
        currentTab.classList.remove('is-active')
      }
      currentTab = newActiveTab
    }
  }
}

window.addEventListener('load', detectPanelPosition)
window.addEventListener('resize', _.throttle(detectPanelPosition, 1000))
window.addEventListener('scroll', _.throttle(updateActiveTabOnScroll, 300))
