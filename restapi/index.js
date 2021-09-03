$(document).ready(function(){
    const url ='https://reqres.in/api/users?page=2';
    $.ajax({
        dataType: 'json',
        url: url,
        success: function(datas){
            var result = "";
            datas.data.forEach(item => {
                const {email,first_name,last_name,avatar} = item;
                result+= `
                    <tr>
                        <td>${first_name}</td>
                        <td>${last_name}</td>
                        <td>${email}</td>
                        <td><img src="${avatar}" width="30" class="rounded-circle"></td>
                    </tr>
                `;

            });
            $('table').append(result);
        }
    });
});
