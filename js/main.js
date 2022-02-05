$(document).ready(() => {

    //Плавное пролистывание блоков

    $(".nav-link").click(function(){
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 700,
            easing: "swing"
        });
        return false;
    });


	$('.category').click((e) => {
        let currentElement = $(e.currentTarget);
        $('.products-container').hide();
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.category').removeClass('active');
        currentElement.addClass('active');
    })


   //Слайдер первый
	$('.service-slick').slick({
  		infinite: true,
  		speed: 300,
  		slidesToShow: 1,
  		variableWidth: true,
  		responsive: [
            {
                breakpoint: 1280,
                settings: {
                    infinite: true,
                    dots: true,
                    arrows : false,
                }
            },
        ]
	});

	// Сладер второй
	$('#gallery-slider').slick({
  		infinite: true,
  		speed: 300,
  		slidesToShow: 1,
  		variableWidth: true,
  		responsive: [
            {
                breakpoint: 1290,
                settings: {
                    infinite: true,
                    variableWidth: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    infinite: true,
                    variableWidth: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    infinite: true,
                    variableWidth: false,
                    slidesToShow: 1,
                }
            },
        ]

	});

	// Открыть pop-up
	$('.open-modal').click(() => {
		$('#reservation').css('display', 'flex');
	});

	// Закрыть pop-up
	$('#reservation-cancel, #reservation').click((e) => {
		if (e.target.id === 'reservation' || e.currentTarget.id === 'reservation-cancel') {
			$('#reservation').hide();
			$('#contact-forms-error').hide();
		}
	});

	//Открыть/закрыть бургер
	$('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });

    $('#header-link a').click(() => {
        $('#header').removeClass('menu-open');
    })

	//Форма отправки письма на почту
	$('form').submit(function () {
        var formID = $(this).attr('id'); // Получение ID формы
        var formNm = $('#' + formID);
        $.ajax({
        	type: 'POST',
            url: 'mail.php', // Обработчик формы отправки
            data: formNm.serialize(),
            success: () => {
				alert('Brzy vás budeme kontaktovat!');
                $('#reservation').hide();
			},
			error: () => {
				alert('Chyba rezervace, kontaktujte prosím na telefonním čísle!');
				$('#reservation').hide();
			}
        });
        return false;
    });
})

















