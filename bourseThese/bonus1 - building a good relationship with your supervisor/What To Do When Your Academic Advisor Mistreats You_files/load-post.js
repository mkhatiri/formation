( function( $ ) {

    /** jQuery Document Ready */
    $(document).ready(function(){

        $( 'a.load-featured-video' ).off( 'click' ).on( 'click', function( e ) { 

            // Cancel click
            e.preventDefault();

            // Get Post ID
            var post_id = $( this ).data( 'video-id' );

            // Get post contents
            $.ajax({
                cache: false,
                timeout: 8000,
                url: php_array.admin_ajax,
                type: "POST",
                data: ( {
                    action:'video_load',
                    id: post_id,
                    embeddable: $( '#pavi-videos' ).hasClass( 'pavi-lightbox' ) ? '1' : ''
                } ),
                beforeSend: function() {  
                    // $( '#pavi-container' ).html( 'Loading' );
                },
                success: function( data, textStatus, jqXHR ){
                    var use_lightbox = this.data.indexOf( 'embeddable=1' ) != -1;
                    if( data ) {
                        if( use_lightbox ) {
                            $.featherlight( data, { closeIcon: '' } );
                        } else {
                            $( '#pavi-container' ).html( $ ( data ) ).fitVids(); 
                        }
                    } else {
                        console.warn( 'Missing video code' );
                    }
                },
                error: function( jqXHR, textStatus, errorThrown ){
                    console.log( 'The following error occured: ' + textStatus, errorThrown );   
                },
                complete: function( jqXHR, textStatus ){
                }
            } );
        } );
    } );

} )( jQuery );