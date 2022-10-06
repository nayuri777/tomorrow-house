const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const deleteButtonList = gnbSearchHistory.querySelectorAll('.delete-button')

const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistory)
  }
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }

  if (!gnbSearch.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistory)
  }
  gnbSearchHistory.classList.add('is-active')
}

function deleteAllGnbHistory() {
  gnbSearchHistoryList.innerHTML = ''
  gnbSearchHistory.classList.remove('is-active')
}

function deleteSearchHistoryItem(e) {
  e.stopPropagation()
  const searchHistoryItem = this.parentNode
  console.log(searchHistoryItem)
  gnbSearchHistoryList.removeChild(searchHistoryItem)

  if (gnbSearchHistoryList.children.length === 0) {
    gnbSearchHistory.classList.remove('is-active')
  }
}

deleteButtonList.forEach((button) => {
  button.addEventListener('click', deleteSearchHistoryItem)
})

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

window.addEventListener('click', closeGnbSearchHistory)

deleteAllButton.addEventListener('click', deleteAllGnbHistory)
