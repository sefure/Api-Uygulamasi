$(document).ready(function(){
    const url ='https://api.collectapi.com/imdb/imdbSearchByName?query=inception';

    $.ajax({
        
        type: 'GET',
        headers: {
            "authorization": "apikey 70VbLGYAZrscxfPtOQVQ19:72zSoBsNtCWF438V8ey8BH",
            "content-type": "application/json"
        },
        url: url,
        success: function(results){
            var result_api = "";
            results.result.forEach(item => {
                const {Title,Year,imdbID,Type,Poster} = item;
                result_api+= `
                    <tr>
                        <td>${Title}</td>
                        <td>${Year}</td>
                        <td>${imdbID}</td>
                        <td>${Type}</td>
                        <td><img src="${Poster}" width="30" class="rounded-circle"></td>
                    </tr>
                `;

            });
            $('table').append(result_api);
        }
    });
});