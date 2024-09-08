// 카테고리 데이터 (예시)
const categories = [
    { name: 'History', link: '#' },
    { name: 'Philosophy', link: '#' },
    { name: 'Language', link: '#' }
    // 추가 카테고리
];

// 검색 기능 수행
function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('results-container');

    // 검색 결과 초기화
    resultsContainer.innerHTML = '';

    // 검색 필터링
    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(query)
    );

    // 검색 결과 표시
    if (filteredCategories.length > 0) {
        filteredCategories.forEach(category => {
            const resultCard = document.createElement('div');
            resultCard.className = 'card';
            resultCard.innerHTML = `<h3><a href="${category.link}">${category.name}</a></h3>`;
            resultsContainer.appendChild(resultCard);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
}
