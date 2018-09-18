
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

				$rotationUp.show().arctext({//formation - formation
					radius: 230, 
					rotate: true,
					dir: 1, 
					animation	: {
					speed	: 10
						}});
				$rotationUp2.show().arctext({//Team Building - Team Building
					radius: 250, 
					rotate: true,
					dir: 1, 
					animation	: {
					speed	: 10
						}});
				$rotationUp3.show().arctext({//Zoopédagogie - Team Building
					radius: 230, 
					rotate: true,
					dir: 1, 
					animation	: {
					speed	: 10
						}});
				$rotationUp4.show().arctext({ //zoopédagogie - formation
					radius: 230, 
					rotate: true,
					dir: 1, 
					animation	: {
					speed	: 10
						}});
				$rotationUp5.show().arctext({//pour les - formation
					radius: 215, 
					rotate: true,
					dir: -1, 
					animation	: {
					speed	: 10
						}});
				$rotationUp6.show().arctext({//Pour le management - Team Building
					radius: 215, 
					rotate: true,
					dir: -1, 
					animation	: {
					speed	: 10
						}});
				$rotationUp2b.show().arctext({//et la gestino de groupe - Team Building
					radius: 230, 
					rotate: true,
					dir: 1, 
					animation	: {
					speed	: 10
						}});
				$rotationUp5b.show().arctext({//de l'éductation - formation
					radius: 230, 
					rotate: true,
					dir: -1, 
					animation	: {
					speed	: 10
						}});
				$rotationUp6b.show().arctext({
					radius: 230, 
					rotate: true,
					dir: -1, 
					animation	: {
					speed	: 10
						}});
			/*
			/*

				$headline.show().arctext({radius: 230});
					
				$word1.show().arctext();
				$word2.show().arctext({radius: 148, dir: -1});
				
				$example1.show().arctext({radius: 10});
				$example2.show().arctext({radius: 230, dir: -1});

				$example4.show().arctext({radius: 10});
			
				
				
				
				$('#button_set').on('click', function() {
					$example4.arctext('set', {
						radius		: 140,
						dir			: -1
					});
					return false;
				});
				$('#button_anim1').on('click', function() {
					$example4.arctext('set', {
						radius		: 10, 
						dir			: -1,
						animation	: {
							speed	: 10,
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
							speed	: 10
						}
					});
					return false;
				});
				$('#button_reset').on('click', function() {
					$example4.arctext('set', {
						radius		: 10, 
						dir			: 1
					});
					return false;
				});

				*/
			
			};