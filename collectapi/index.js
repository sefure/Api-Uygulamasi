$(document).ready(function(){
    const url ='https://api.collectapi.com/news/getNews?country=tr&tag=general';

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
                const {url,description,image,name,source} = item;
                result_api+= `
                    <tr>
                        <td>${url}</td>
                        <td>${description}</td>
                        <td>${name}</td>
                        <td>${source}</td>
                        <td><img src="${image}" width="30" class="rounded-circle"></td>
                    </tr>
                `;

            });
            $('table').append(result_api);
        }
    });
});
