		$('.menu-movil-icon').on('click', function(){
			$('.nav-list').toggleClass('visible');
			//$('body').toggleClass('scroll');
			$('.sombra').toggleClass('visible-som');
		})

		  
		  
		  
		$('.sombra').on('click', function(){
			$('.nav-list').removeClass('visible');
			//$('body').removeClass('scroll');
			$('.sombra').removeClass('visible-som');
		})

		$('#closeH').on('click', function(){
			$('.menu-nav').removeClass('visibles');
			$('body').removeClass('scroll');
			$('.sombra').removeClass('visible-som');
		})