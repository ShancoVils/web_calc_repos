
window.addEventListener('input', function(){
    range_elem = event.target
    object_input =  document.getElementById(range_elem.dataset.count)
    object_input.value = range_elem.value;
});


// Расчет суммы
window.onload=function(){
    // Получаю все инпуты( и ползунки и текстбоксы)
    const randge_test =document.querySelectorAll('input');
    // Цикл для того, что бы сумма менялась при изменении любого из элементов
    for (let i = 0; i < randge_test.length; i++) {
        // Проверка
        if (randge_test){
            // Лисенер на все инпуты, которые есть
            randge_test[i].addEventListener("input", function(){
                // Получаю все значения из текстбоксов
                // Арендные ссылки
                range_elements = document.getElementsByClassName("caunt-range")
                param_1 =  parseInt(range_elements[0].value)
                param_2 =  parseInt(range_elements[1].value)
                param_3 =  parseInt(range_elements[2].value)
                param_4 =  parseInt(range_elements[3].value)
                param_5 =  parseInt(range_elements[4].value)
                param_6 =  parseInt(range_elements[5].value)
                param_7 =  parseInt(range_elements[6].value)


                
                function random_param(a, b) {
                    return Math.floor(Math.random() * (b - a + 1)) + a;
                }


                win1_result = param_1*random_param(1,param_6)+param_2*random_param(0.03*param_5,0.2*param_5)*random_param(1,param_6)+param_3*random_param(0.4*param_5,0.8*param_5)*random_param(1,param_6)

                document.querySelector('.result-text-summ__first').innerHTML = '<span>'+ Math.round(win1_result)+'</span>' 
                
                param_8 =  parseInt(range_elements[7].value)
                param_9 =  parseInt(range_elements[8].value)
                param_10 =  parseInt(range_elements[9].value)
                param_11 =  parseInt(range_elements[10].value)
                result_before_DR = param_8*random_param(2,2*param_9)*random_param(20,30)


                if(param_10>10 || param_11>20){
                    result_with_DR = result_before_DR*0.01*random_param(130,200)
                }
                else{
                    result_with_DR = result_before_DR
                }

                win2_result = result_with_DR
                document.querySelector('.result-text-summ__second').innerHTML = '<span>'+ Math.round(win2_result)+'</span>' 


                win3_c_14 = document.getElementById('checkbox_test')

                param_12 =  parseInt(range_elements[11].value)
                param_13 =  parseInt(range_elements[12].value)

                no_mobile_result = param_12*random_param(1,5)/10*random_param(5,40)/1000*param_13*(random_param(11,25)*0.1)
                with_mobile_result = no_mobile_result*random_param(11,15)*0.1
                

                if(win3_c_14.checked){
                    document.querySelector('.result-text-summ__third').innerHTML = '<span>'+ Math.round(with_mobile_result)+'</span>' 
                }
                else{
                    document.querySelector('.result-text-summ__third').innerHTML = '<span>'+ Math.round(no_mobile_result)+'</span>' 
                }
            });
        }
        else{
            console.log("gg")
        }
    }
};

//Смена окон
// window.addEventListener('click', function(){
//     first_grid = document.getElementsByClassName("first")
//     first_href = document.getElementById("first")
//     first_result = document.getElementsByClassName("result-text-summ__first")

//     second_grid = document.getElementsByClassName("second")
//     second_href = document.getElementById("second")
//     second_result = document.getElementsByClassName("result-text-summ__second")

//     third_grid = document.getElementsByClassName("third")
//     third_href = document.getElementById("third")
//     third_result = document.getElementsByClassName("result-text-summ__third")

//     input_text_name = event.target.id
//     if(input_text_name == "first"){
//         first_grid[0].style.display = ("flex")
//         second_grid[0].style.display = ("none")
//         third_grid[0].style.display = ("none")
//         first_result[0].style.display = "inline"
//         second_result[0].style.display = "none"
//         third_result[0].style.display = "none"


//     }   
//     else if(input_text_name =="second"){
//         second_grid[0].style.display = ("flex")
//         first_grid[0].style.display = ("none")
//         third_grid[0].style.display = ("none")
//         first_result[0].style.display = "none"
//         second_result[0].style.display = "inline"
//         third_result[0].style.display = "none"
//     }
//     else if(input_text_name =="third"){
//         third_grid[0].style.display = ("flex")
//         second_grid[0].style.display = ("none")
//         first_grid[0].style.display = ("none")
//         first_result[0].style.display = "none"
//         second_result[0].style.display = "none"
//         third_result[0].style.display = "inline"
//     }
//     else{
//         console.log("gg")
//     }
// });
