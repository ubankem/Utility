const select_utility = document.getElementById("select__utility");
const Variant = document.getElementById("Variant");


let variant_option = "<option selected disabled>select variant</option>";
Variant.innerHTML = variant_option; // displaying the default variant

select_utility.addEventListener("change", function(evt){
    switch(evt.target.value){
        case "airtime":
            variant_option = `<option value="AIRTEL">Airtel Airtime</option>
                              <option value="MTN">Mtn Airtime</option>
                              <option value="GLO">Glo Airtime</option>
                              <option value="9MOBILE">9Mobile Airtime</option>
                              `;
                              Variant.innerHTML = variant_option;
        break;

        case "tv":
            variant_option = `<option value = "DSTV">DSTV Subscription</option>
                              <option value = "GOTV">GOTV payment</option>
                              <option value = "STARTIMES">STARTIMES Subcription</option>
                              `;

                              Variant.innerHTML = variant_option;
        break;

        case "electricity":
            variant_option = `<option value="IKEDC">Ikeja Electricity - IKEDC</option>
                              <option value="KEDCO">Kano Electricity - KEDCO</option>
                              <option value="PHED">Portharcourt Electricity - PHED</option>
                              <option value="JED">Jos Electricity - JED</option>
                              <option value="EKED">Eko Electricity - EKED</option>
                              <option value="AEDC">Abuja Electricity - AEDC</option>
                              <option value="KAEDCO">Kaduna Electricity - KAEDCO</option>
                              <option value="IBEDC">Ibadan Electricity - IBEDC</option>
                              <option value="EEDC">Enugu Electricity - EEDC</option>
                              <option value="BEDC"Benin Electricity - BEDC</option>
                            `
                            Variant.innerHTML = variant_option;

        break;
    }
   

});

