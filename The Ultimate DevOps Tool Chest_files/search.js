var ss360Config = {
        //// required
        siteId: 'www.xebialabs.com',
        searchBoxSelector: '#searchBox',
        //// optional
        // the text to show before the search results
        searchResultsCaption: 'Search results for "#QUERY#"',
        // speed of the animations, default: 300ms
        animationSpeed: 350,
        // placeholder
        placeholder: 'search',
        // minimum number of characters before the suggests shows, default: 3
        minChars: 3,
        // whether to show images in search suggestions
        showImagesSuggestions: false, 
        // whether to show images in search results
        showImagesResults: false,
        // the maximum number of search suggests to be shown [1, 25]
        numSuggestions: 8,
        // the maximum number of search results to be shown [1,1000]
        numResults: 100,
        // if you want the default CSS styling
        defaultCss: true,
        // navigation "top", "left", or "none"
        navigation: 'top',        
        // whether to show implementation errors, set to false for production
        showErrors: false
    };