<script>
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

        // 검색 결과 표시 (최대 15개)
        filteredCategories.slice(0, 15).forEach(category => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `<a href="${category.link}">${category.name}</a>`;
            resultsContainer.appendChild(resultItem);
        });

        // 결과가 없을 경우 메시지 표시
        if (filteredCategories.length === 0) {
            resultsContainer.innerHTML = '<p>No results found.</p>';
        }
    }
</script>
