
			var $rotationUp	= $('#rotationUp').hide();
			var $rotationUp2	= $('#rotationUp2').hide();
			var $rotationUp3	= $('#rotationUp3').hide();
			var $rotationUp4	= $('#rotationUp4').hide();
			var $rotationUp5	= $('#rotationUp5').hide();
			var $rotationUp6	= $('#rotationUp6').hide();
			var $rotationUp2b	= $('#rotationUp2b').hide();
			var $rotationUp5b	= $('#rotationUp5b').hide();
			var $rotationUp6b	= $('#rotationUp6b').hide();
			
			google.load('webfont','1');
			
			google.setOnLoadCallback(function() {
				WebFont.load({
					google		: {
						families	: ['Cormorant Garamond','serif']
					},
					fontactive	: function(fontFamily, fontDescription) {
						init();
					},
					fontinactive	: function(fontFamily, fontDescription) {
						init();
					}
				});
			});
			
			function init() {

				$rotationUp.show().arctext({
					radius: 400, 
					rotate: true,
					dir: 1, 
					animation	: {
					speed	: 300
						}});
				$rotationUp2.show().arctext({
					radius: 400, 
					rotate: true,
					dir: 1, 
					animation	: {
					speed	: 300
						}});
				$rotationUp3.show().arctext({
					radius: 400, 
					rotate: true,
					dir: 1, 
					animation	: {
					speed	: 300
						}});
				$rotationUp4.show().arctext({
					radius: 400, 
					rotate: true,
					dir: 1, 
					animation	: {
					speed	: 300
						}});
				$rotationUp5.show().arctext({
					radius: 400, 
					rotate: true,
					dir: -1, 
					animation	: {
					speed	: 300
						}});
				$rotationUp6.show().arctext({
					radius: 400, 
					rotate: true,
					dir: -1, 
					animation	: {
					speed	: 300
						}});
				$rotationUp2b.show().arctext({
					radius: 400, 
					rotate: true,
					dir: 1, 
					animation	: {
					speed	: 300
						}});
				$rotationUp5b.show().arctext({
					radius: 400, 
					rotate: true,
					dir: -1, 
					animation	: {
					speed	: 300
						}});
				$rotationUp6b.show().arctext({
					radius: 400, 
					rotate: true,
					dir: -1, 
					animation	: {
					speed	: 300
						}});
			/*
			/*

				$headline.show().arctext({radius: 400});
					
				$word1.show().arctext();
				$word2.show().arctext({radius: 148, dir: -1});
				
				$example1.show().arctext({radius: 300});
				$example2.show().arctext({radius: 400, dir: -1});

				$example4.show().arctext({radius: 300});
			
				
				
				
				$('#button_set').on('click', function() {
					$example4.arctext('set', {
						radius		: 140,
						dir			: -1
					});
					return false;
				});
				$('#button_anim1').on('click', function() {
					$example4.arctext('set', {
						radius		: 300, 
						dir			: -1,
						animation	: {
							speed	: 300,
							easing  : 'ease-out'
						}
					});
					return false;
				});
				$('#button_anim2').on('click', function() {
					$example4.arctext('set', {
						radius		: 200, 
						dir			: 1, 
						animation	: {
							speed	: 300
						}
					});
					return false;
				});
				$('#button_reset').on('click', function() {
					$example4.arctext('set', {
						radius		: 300, 
						dir			: 1
					});
					return false;
				});

				*/
			
			};