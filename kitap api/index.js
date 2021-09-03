$(document).ready(function(){
    const url ='https://api.collectapi.com/book/newBook';

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
                const {url,indirim,fiyat,yayin,yazar,title,image} = item;
                result_api+= `
                    <tr>
                        <td>${url}</td>
                        <td>${indirim}</td>
                        <td>${fiyat}</td>
                        <td>${yayin}</td>
                        <td>${yazar}</td>
                        <td>${title}</td>
                        <td><img src="${image}" width="30" class="rounded-circle"></td>
                        
                        
                    </tr>
                `;

            });
            $('table').append(result_api);
        }
    });
});