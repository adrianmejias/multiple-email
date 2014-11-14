;( function ( $ )
{
	$.fn.multipleEmail = function ( options )
	{
		var defaults =
		{
			attr: {},
			classes: null,
			complete: null
		};
		var settings = $.extend ( defaults, options );
		// our temporary email listing (internal usage)
		var emails = [];
		/**
		 * Check for a valid email address
		 *
		 * @param string email Email address
		 *
		 * @return boolean
		 */
		var validate_email = function ( email )
		{
			return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test ( email );
		};
		/**
		 * Check if email is listed in our array.
		 *
		 * @param object container Parent div
		 * @param string email Email address
		 *
		 * @return boolean is_email
		 */
		var is_email_listed = function ( container, email )
		{
			var is_email = false;
			container.each ( function ( )
			{
				if ( $ ( this ).text ( ) == email )
				{
					is_email = true;
					return;
				}
			} );
			return is_email;
		};
		/**
		 * Append email to the listing and array.
		 *
		 * @param object element Element that container our email value
		 * @param object input Top element containing our end value
		 *
		 * @return void
		 */
		var append_email = function ( element, input )
		{
			var container = element.parent ( );
			var email = element.val ( );
			if ( validate_email ( email ) && ! is_email_listed ( container.find ( '.multiple-email-list li' ), email ) )
			{
				// empty our value
				element.val ( '' );
				// append email to listing
				container.find ( '.multiple-email-list' ).append (
					$ ( '<li>' ).text ( email ).click ( function ( e )
					{
						$ ( this ).remove ( );
						// remove from array
						emails = $.grep ( emails, function ( v )
						{
							return v !== email;
						} );
					} )
				);
				// add to array
				emails.push ( email );
				// add to original input (comma seperated)
				input.val ( emails.join ( ',' ) );
				// custom function
				if ( settings.complete )
				{
					settings.complete ( email, emails );
				}
			}
		};
		return this.each ( function ( )
		{
			var $input = $ ( this );
			if ( $input.is ( 'input' ) )
			{
				// clone our input
				$clone = $ ( this ).clone ( );
				$input.hide ( ).after (
					$ ( '<div>' ).addClass ( 'multiple-email-container' ).append (
						$clone.removeAttr ( 'id name' ).attr ( settings.attr ).addClass ( settings.classes ).keydown ( function ( e )
						{
							var code = e.keyCode || e.which;
							// prevent form posting
							if ( code == 13 )
							{
								e.preventDefault ( );
							}
						} ).keyup ( function ( e )
						{
							var code = e.keyCode || e.which;
							// space, comma, tab, enter
							if ( $.inArray ( code, [ 32, 188, 9, 13 ] ) != -1 )
							{
								// get rid of space and comma
								if ( $.inArray ( code, [ 32, 188 ] ) != -1 )
								{
									$ ( this ).val ( $ ( this ).val ( ).slice ( 0, -1 ) );
								}
								append_email ( $ ( this ), $input );
							}
						} ).blur ( function ( e )
						{
							append_email ( $ ( this ), $input );
						} )
					).append (
						$ ( '<ul>' ).addClass ( 'multiple-email-list' )
					)
				);
			}
		} );
	}
} ) ( jQuery );