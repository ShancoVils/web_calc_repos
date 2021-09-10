



//Генерация страницы
//Получение данных элементов страницы и генерация элементов
window.onload = function(){
    //Получение данных об элементах страницы
    $.ajax({
        url: "http://127.0.0.1:8000/page-objects/",      
        method: 'get',           
        dataType: 'json', 
        contentType: "application/json",        
        success: function(data) {
            //При успешном получении данных, выполняется генерация страниц
            Page_object_input(data)
            
        }
    });


    function Page_object_input(data){
        
        //Загрузка данных хедера
        Page_header_load(data)

        //Загрузка данных меню
        Page_sections_load(data)

        //Загрузка элементов секций
        Page_section_element_load(data)
        
        //Загрузка футера
        Page_footer_load(data)
    }


    

    

};

//Генерация заголовка
function Page_header_load(data){
    //Генерация заголовка
    let header_title = data.find((item) => item.name_object === "Title");

    header_first = document.querySelector('.first-header-word')
    header_first.innerHTML =  "<span>"+header_title.content[0] +"</span>"
    header_first = document.querySelector('.second-header-word')
    header_first.innerHTML =  "<span>"+header_title.content[1] +"</span>"
}

//Генерация меню (секций)
function Page_sections_load(data){
    let menu_element_array = data.filter((item) => item.name_object === "Sector");
    query_menu = document.querySelector('.menu')
    for (let index = 0; index < menu_element_array.length; index++) {
        //Создание блока элемента меню
        let menu_item = document.createElement("div");
        menu_item.className ="menu__item";
        //Создание инпута 
        let menu_item_radio = document.createElement("input")
        menu_item_radio.name = "range-value"
        menu_item_radio.type = "radio"
        menu_item_radio.id = "check_"+index
        if (index==0){
            menu_item_radio.checked = true
        }
        else{
            menu_item_radio.checked = false
        }   
        //Создание лейбла
        let menu_item_radio_lable = document.createElement("label")
        menu_item_radio_lable.innerHTML = "<p>"+ menu_element_array[index].content[0] +"</p>"
        menu_item_radio_lable.className ="first-label";
        menu_item_radio_lable.htmlFor = "check_"+index
        //Создание расстановка отношений
        menu_item.appendChild(menu_item_radio)
        menu_item.appendChild(menu_item_radio_lable)
        query_menu.appendChild(menu_item);

        
    }

}

//Генерация элементов в секциях
function Page_section_element_load(data){
    let menu_element_array = data.filter((item) => item.name_object === "Sector");
    main_flex_block = document.querySelector('section')
    for (let index_main = 0; index_main < menu_element_array.length; index_main++) {

        //Создание блока секции
        //Количество созданных блоков завист от количества пунктов в меню 
        let flex_section = document.createElement("div");
        flex_section.className ="flex-counters";

        //Все секци кроме первой скрыты
        if(index_main > 0){
            flex_section.style.display = ("none")
        }
        // Атрибут для переключения окон
        flex_section.setAttribute("sector_data", "check_"+index_main);
        let test_container = document.querySelector(".flex-main-container")

        let max_element_arr = []

        //Создание элементов блока
        let section_element = menu_element_array[index_main].sector
        for (let index_med = 0; index_med < section_element.length; index_med++) {

            //Создания элементов в секции
            //Количество зависит от количества записей, относящихся к этой секции
            let flex_section_element = document.createElement("div");
            flex_section_element.className ="flex-counters__element";

            //Создание дополнительного блока (для разрешения 720px-1000px)
            let flex_element_720_disctiotion = document.createElement("div");
            flex_element_720_disctiotion.className ="flex_section_disctiption_container";

            //Создание дополнительного блока (для разрешения 720px-1000px)
            // alert( window.innerWidth)
            let flex_element_720 = document.createElement("div");
            flex_element_720.className ="flex_section_input_container";
            
            //Создание элементов в "строке" секци
            //Колчество элементов зависит от количества инпутов + описательный блок
            let flex_section_element_item = document.createElement("div");
            flex_section_element_item.className ="mini_element";

            //Получение элементов элементов блока
            array_block = menu_element_array[index_main].sector[index_med]

            //Генерация названия "строки" секции
            let flex_section_element_h1 = document.createElement("h1");
            flex_section_element_h1.className ="description-element-title";
            flex_section_element_h1.innerHTML = array_block.description_objects[0]
            flex_section_element_item.appendChild(flex_section_element_h1)
            //Генерация описанияя "строки" секции
            let flex_section_element_p = document.createElement("p");
            flex_section_element_p.className ="description-element-text";
            flex_section_element_p.innerHTML = array_block.description_objects[1]
            flex_section_element_item.appendChild(flex_section_element_p)
            //Установка отношений между блоками

            if (document.documentElement.scrollWidth>=720 && document.documentElement.scrollWidth<=999){
                flex_element_720_disctiotion.appendChild(flex_section_element_item)
                flex_section_element.appendChild(flex_element_720_disctiotion)
                flex_section.appendChild(flex_section_element)
            }
            else{
                flex_section_element.appendChild(flex_section_element_item)
                flex_section.appendChild(flex_section_element)
            }

            //Генерация инпутов
            //Количество зависит от количества элементов в массиве "элементы диапазона"
            input_array = array_block.input_data_objects
            max_element_arr.push(input_array.length)
            
            for (let index_small = 0; index_small < input_array.length; index_small++) {

                //Генерация элементов "строки" секции (в элементы входит описательная часть, что была сгенерирована до цикла)
                let flex_section_element_item = document.createElement("div");
                flex_section_element_item.className ="mini_element";

                //Получение элементов элементов блока
                input_array_block = input_array[index_small]
                array_block = menu_element_array[0].sector[index_med]

                //Генерация названия блока с инпутом
                let flex_section_element_p = document.createElement("p");
                flex_section_element_p.className ="element-title";
                flex_section_element_p.innerHTML = input_array_block[0]
                flex_section_element_item.appendChild(flex_section_element_p)                

                //Генерация инпута (текст)
                let flex_section_element_input_text = document.createElement("input")
                flex_section_element_input_text.type = "text"
                //Создание уникального id (номер секции+номер строки+номер элемента)
                flex_section_element_input_text.id =String(index_main)+ String(index_med)+ String(index_small)
                flex_section_element_input_text.className = "count-range-text"
                flex_section_element_input_text.value = "200"
                flex_section_element_item.appendChild(flex_section_element_input_text)

                //Генерация инпута (ренж)
                let flex_section_element_input_range = document.createElement("input")
                flex_section_element_input_range.type = "range"
                flex_section_element_input_range.dataset = index_med
                flex_section_element_input_range.id =String(index_main)+ String(index_med)+ String(index_small)
                flex_section_element_input_range.className = "caunt-range"
                flex_section_element_input_range.value = "1900"
                flex_section_element_input_range.min = input_array_block[1]
                flex_section_element_input_range.max = input_array_block[2]
                flex_section_element_item.appendChild(flex_section_element_input_range)

                //Генерация блока с мин/макс значениями инпута(ренж)
                let range_sub_text = document.createElement("div");
                range_sub_text.className ="range-span";
                range_sub_text.innerHTML = "<span>"+ input_array_block[1] +"</span>"+"<br>"+ "<span>"+input_array_block[2] +"</span>"
                flex_section_element_item.appendChild(range_sub_text)

                if (document.documentElement.scrollWidth>=720 && document.documentElement.scrollWidth<=999){
                    flex_element_720.appendChild(flex_section_element_item)
                    flex_section_element.appendChild(flex_element_720)
                }
                else{
                    flex_section_element.appendChild(flex_section_element_item)
                }
            }
        }

        section_max_count_elem = Math.max.apply(null,max_element_arr)
        if (section_max_count_elem>=4){
            flex_section.classList.toggle("fouth");

        }
        else if(section_max_count_elem==3){
            flex_section.classList.toggle("third");
        }
        else if(section_max_count_elem==2){
            flex_section.classList.toggle("second");

        }
        else if(section_max_count_elem==1){
            flex_section.classList.toggle("first");

        }
       
        if (menu_element_array[index_main].content[1]){
            let flex_section_checkbox = document.createElement("div");
            flex_section_checkbox.className ="flex-counters__checkbox";

            let flex_section_checkbox_element = document.createElement("input");
            flex_section_checkbox_element.type = "checkbox"
            flex_section_checkbox_element.className ="element-checkbox";
            flex_section_checkbox_element.id = "elem_checkbox_id"
            flex_section_checkbox.appendChild(flex_section_checkbox_element)

            let flex_section_checkbox_alert = document.createElement("span");
            flex_section_checkbox_alert.className ="element-checkbox-alert";
            flex_section_checkbox_alert.innerHTML = menu_element_array[index_main].content[1]

            flex_section_checkbox.appendChild(flex_section_checkbox_alert)

            flex_section.appendChild(flex_section_checkbox)
        }

        //Отношения между блоками
        test_container.appendChild(flex_section)
    }
}

//Генерация футера
function Page_footer_load(data){

    let menu_element_array = data.filter((item) => item.name_object === "Footer");
    //Генерация блока "footer"
    let footer_block = document.querySelector('footer')

    footer_block_image = document.querySelector('.footer__image')
    footer_block_image.innerHTML = "<img src=\"static/"+menu_element_array[0].content[0] +"\">";
    footer_block.appendChild(footer_block_image)

    menu_items = data.filter((item) => item.name_object === "Sector")
    footer_block_p = document.querySelector('.footer__calculate-result')
    footer_block_p.innerHTML += "<p>"+menu_element_array[0].content[1] +"</p>"
    //

    //ПОМЕТКА
    //Поставил 3, т.к. формулы 3, при расширении оптимизировать под n-количество

    //
    for (let index = 0; index < 3; index++) {
        footer_block_p.innerHTML += "<span class = formula_value_"+index+">"+index+"<sup>&#8381</sup></span>"
        footer_block.appendChild(footer_block_p)
    }
    footer_block_p.innerHTML += "<p>"+menu_element_array[0].content[2] +"</p>"


    footer_button = document.querySelector('.footer__button')
    footer_block_button_title = document.querySelector('.main-button')
    footer_block_button_title.innerHTML =  "<p>"+ menu_element_array[0].content[3]  +"</p>"
    footer_button.appendChild(footer_block_button_title)
    footer_block.appendChild(footer_button )






}

//Смена секций и элементов в них
window.addEventListener('click', function(data){
    let change_section_input = document.querySelectorAll("input[type=radio]")

    for (let index = 0; index < change_section_input.length; index++) {
        change_section_input[index].addEventListener('change', function(data){
            input_text_name = event.target.id
            section_query = document.querySelectorAll(".flex-counters")
            for (let index = 0; index < section_query.length; index++) {
                attribute_sector = section_query[index].getAttribute("sector_data")
                if(input_text_name==attribute_sector){   
                    attribute_sector = section_query[index]
                    attribute_sector.style.display = ("flex");
                }
                else{
                    attribute_sector = section_query[index]
                    attribute_sector.style.display = ("none");
                } 
            }
            footer = document.querySelectorAll(".footer__calculate-result>span")
            if(input_text_name=="check_0"){
                footer[0].style.display = ("flex")
                footer[1].style.display = ("none")
                footer[2].style.display = ("none")

            }
            else if(input_text_name=="check_1"){
                footer[0].style.display = ("none")
                footer[1].style.display = ("flex")
                footer[2].style.display = ("none")

            }
            else if(input_text_name=="check_2"){
                footer[0].style.display = ("none")
                footer[1].style.display = ("none")
                footer[2].style.display = ("flex")    
            }
            else{
                footer[0].style.display = ("none")
                footer[1].style.display = ("none")
                footer[2].style.display = ("none")    
            }
        })

    
}

})

//Изменение значения текстбокса от ползунка
window.addEventListener('input', function(){
    range_elem = event.target
    object_input =  document.getElementById(range_elem.id)
    object_input.value = range_elem.value;

    const randge_test = document.querySelectorAll('input[type=text]');
    // Цикл для того, что бы сумма менялась при изменении любого из элементов
    for (let i = 0; i < randge_test.length; i++) {
        // Проверка
        if (randge_test){
            // Лисенер на все инпуты, которые есть

            // Получаю все значения из текстбоксов
            // Арендные ссылки
            // range_elements = document.getElementsByClassName("caunt-range")
            param_1 =  parseInt(randge_test[0].value)
            param_2 =  parseInt(randge_test[1].value)
            param_3 =  parseInt(randge_test[2].value)
            param_4 =  parseInt(randge_test[3].value)
            param_5 =  parseInt(randge_test[4].value)
            param_6 =  parseInt(randge_test[5].value)
            param_7 =  parseInt(randge_test[6].value)
            

            function random_param(a, b) {
                return Math.floor(Math.random() * (b - a + 1)) + a;
            }


            win1_result = param_1*random_param(1,param_6)+param_2*random_param(0.03*param_5,0.2*param_5)*random_param(1,param_6)+param_3*random_param(0.4*param_5,0.8*param_5)*random_param(1,param_6)

            document.querySelector('.formula_value_0').innerHTML =Math.round(win1_result)+ "<sup>&#8381</sup>"
            
            param_8 =  parseInt(randge_test[7].value)
            param_9 =  parseInt(randge_test[8].value)
            param_10 =  parseInt(randge_test[9].value)
            param_11 =  parseInt(randge_test[10].value)
            result_before_DR = param_8*random_param(2,2*param_9)*random_param(20,30)


            if(param_10>10 || param_11>20){
                result_with_DR = result_before_DR*0.01*random_param(130,200)
            }
            else{
                result_with_DR = result_before_DR
            }

            win2_result = result_with_DR
            document.querySelector('.formula_value_1').innerHTML = Math.round(win2_result)+ "<sup>&#8381</sup>"


            win3_c_14 = document.getElementById('elem_checkbox_id')

            param_12 =  parseInt(randge_test[11].value)
            param_13 =  parseInt(randge_test[12].value)

            no_mobile_result = param_12*random_param(1,5)/10*random_param(5,40)/1000*param_13*(random_param(11,25)*0.1)
            with_mobile_result = no_mobile_result*random_param(11,15)*0.1
            

            if(win3_c_14.checked){
                document.querySelector('.formula_value_2').innerHTML = Math.round(with_mobile_result)+ "<sup>&#8381</sup>"
            }
            else{
                document.querySelector('.formula_value_2').innerHTML = Math.round(no_mobile_result)+ "<sup>&#8381</sup>"
            }
        }
        else{
            console.log("gg")
        }
    }

    
    
});



