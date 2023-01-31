      document.addEventListener("DOMContentLoaded", function () {
        var phoneInputs = document.querySelectorAll('input[data-tel-input]');
        var getInputNumbersValue = function (input) {
          // Return stripped input value — just numbers
          return input.value.replace(/\D/g, '');
        }

        var onPhonePaste = function (e) {
          var input = e.target,
              inputNumbersValue = getInputNumbersValue(input);
          var pasted = e.clipboardData || window.clipboardData;
          if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
              // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
              // formatting will be in onPhoneInput handler
              input.value = inputNumbersValue;
              return;
            }
          }
        }

        var onPhoneInput = function (e) {
          var input = e.target,
              inputNumbersValue = getInputNumbersValue(input),
              selectionStart = input.selectionStart,
              formattedInputValue = "";

          if (!inputNumbersValue) {
            return input.value = "";
          }

          if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
              // Attempt to input non-numeric symbol
              input.value = inputNumbersValue;
            }
            return;
          }

          if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
              formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
              formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
              formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
              formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
          } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
          }
          input.value = formattedInputValue;
        }
        var onPhoneKeyDown = function (e) {
          // Clear input after remove last symbol
          var inputValue = e.target.value.replace(/\D/g, '');
          if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
          }
        }
        for (var phoneInput of phoneInputs) {
          phoneInput.addEventListener('keydown', onPhoneKeyDown);
          phoneInput.addEventListener('input', onPhoneInput, false);
          phoneInput.addEventListener('paste', onPhonePaste, false);
        }
      })

      const token = '5244443026:AAHgIqetP7aOEyZ2P_hrlS7IXml8sPAPR5Y';
      const chatId = '-1001613652671'; //групповой id
      //const chatId = '827251072'; //тест id


      $(document).ready(function () {
        $("#button").on('click', function (event) {
          execute();
        });

        function execute() {
          const name = document.querySelector('#name').value;
          const phone = document.querySelector('#phone').value;
          const place = document.querySelector('#place'); 
          var val = place.options[place.selectedIndex].value;
          const typeTrain = document.querySelector('#typeTrain'); 
          var tr = typeTrain.options[typeTrain.selectedIndex].value;
          const child = document.querySelector('#child:checked') ? "Да" : "Нет";
          const message = `Имя: ${name}\nНомер телефона: ${phone}\nРебенок: ${child}\nМесто: ${val}\nТип трени: ${tr}`;

          if (phone == "") 
          {
            alert( 'Введите номер телефона!' )
          }
          else if(name == ""){
            alert( 'Введите ваше имя!' )
          }
          else{
            $.ajax({
              type: 'POST',
              url: `https://api.telegram.org/bot${token}/sendMessage`,
              data: {
                chat_id: chatId,
                text: message,
                parse_mode: 'html',
              },
              success: function (res) {
                console.debug(res);
                $('#response').text('Ваша заявка отправлена!');
                
              },
              error: function (error) {
                console.error(error);
                alert("Произошла ошибка :(");
              }
            });
          };

          
        }
      });

      $(document).ready(function () {
        $("#button2").on('click', function (event) {
          execute();
        });

        function execute() {
          const name = document.querySelector('#name2').value;
          const phone = document.querySelector('#phone2').value;
          const place = document.querySelector('#place2'); 
          var val = place.options[place.selectedIndex].value;
          const typeTrain = document.querySelector('#typeTrain2'); 
          var tr = typeTrain.options[typeTrain.selectedIndex].value;
          const child = document.querySelector('#child2:checked') ? "Да" : "Нет";
          const message = `Имя: ${name}\nНомер телефона: ${phone}\nРебенок: ${child}\nМесто: ${val}\nТип трени: ${tr}`;
          if (phone == "") 
          {
            alert( 'Введите номер телефона!' )
          }
          else if(name == ""){
            alert( 'Введите ваше имя!' )
          }
          else{
          $.ajax({
            type: 'POST',
            url: `https://api.telegram.org/bot${token}/sendMessage`,
            data: {
              chat_id: chatId,
              text: message,
              parse_mode: 'html',
            },
            success: function (res) {
              console.debug(res);
              $('#response2').text('Ваша заявка отправлена!');
            },
            error: function (error) {
              console.error(error);
              alert("Произошла ошибка :(");
            }
          });
        };
        }
      });


      $(document).ready(function () {
        $("#button3").on('click', function (event) {
          execute();
        });

        function execute() {
          const name = document.querySelector('#name3').value;
          const phone = document.querySelector('#phone3').value;
          const place = document.querySelector('#place3'); 
          var val = place.options[place.selectedIndex].value;
          const typeTrain = document.querySelector('#typeTrain3'); 
          var tr = typeTrain.options[typeTrain.selectedIndex].value;
          const child = document.querySelector('#child3:checked') ? "Да" : "Нет";
          const message = `Имя: ${name}\nНомер телефона: ${phone}\nРебенок: ${child}\nМесто: ${val}\nТип трени: ${tr}`;
          if (phone == "") 
          {
            alert( 'Введите номер телефона!' )
          }
          else if(name == ""){
            alert( 'Введите ваше имя!' )
          }
          else{
          $.ajax({
            type: 'POST',
            url: `https://api.telegram.org/bot${token}/sendMessage`,
            data: {
              chat_id: chatId,
              text: message,
              parse_mode: 'html',
            },
            success: function (res) {
              console.debug(res);
              $('#response3').text('Ваша заявка отправлена!');
            },
            error: function (error) {
              console.error(error);
              alert("Произошла ошибка :(");
            }
          });
        };
        }
      });