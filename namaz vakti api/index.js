$(document).ready(function(){
    const url ='https://api.collectapi.com/pray/all?data.city=istanbul';

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
                const {saat,vakit} = item;
                result_api+= `
                    <tr>
                        <td>${saat}</td>
                        <td>${vakit}</td>
                    </tr>
                `;

            });
            $('table').append(result_api);
        }
        
    });
    
});