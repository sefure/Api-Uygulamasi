$(document).ready(function(){
    const url ='https://dummyapi.io/data/api/user';

    $.ajax({
        
        type: 'GET',
        headers: {
            "app-id": "60e1b755a3b6d5b758a92471",
            
        },
        url: url,
        success: function(datas){
            var result = "";
            datas.data.forEach(item => {
                const {id,title,firstName,lastName,email,picture} = item;
                result+= `
                    <tr>
                        <td>${id}</td>
                        <td>${title}</td>
                        <td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${email}</td>
                        <td><img src="${picture}" width="30" class="rounded-circle"></td>
                        
                        
                    </tr>
                `;

            });
            $('table').append(result);
        }
    });
});