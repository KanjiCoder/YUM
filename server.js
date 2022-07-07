
const l_url = require( "url" );                                 // [AAA.004]  
    
    //:mimetypes_4_reasons:------------------------------://    // [AAA.006]
                                                                // [AAA.006]
    var d_jso = { "Content-Type": "application/json"     } ;    // [AAA.006]
    var d_txt = { "Content-Type": "text/plain"           } ;    // [AAA.006]
    var d_png = { "Content-Type": "image/png"            } ;    // [AAA.006]
    var d_htm = { "Content-Type": "text/html"            } ;    // [AAA.006]
    var d_js  = { "Content-Type": "text/javascript"      } ;    // [AAA.006]
                                                                // [AAA.006]
    //:------------------------------:mimetypes_4_reasons://    // [AAA.006]
                                      
require( "http" ).createServer(function(i_ask,i_giv){           // [AAA.001]
                                                                // [AAA.001]
    var sob ={                                                  // [AAA.004]
                                                                // [AAA.004]
        m_ask : i_ask                                           // [AAA.004]
    ,   m_giv : i_giv                                           // [AAA.004]
    ,   m_url : l_url.parse( i_ask.url , 1 ).pathname           // [AAA.004]
                                                                // [AAA.004]
    };;                                                         // [AAA.004]

    sob.m_url =( sob.m_url.toUpperCase() );      //!#MRI#!//    

                                                                // [AAA.004]
    if( "/HELLO" == sob.m_url ){                                // [AAA.005]

        i_giv.end( "[WoRlD]" );                                 // [AAA.005]
    }else{                                                      // [AAA.005]
    
        sob.m_giv.end( sob.m_url ); /**F1 BITCH**/              // [AAA.004]
    };;                                                         // [AAA.005]
                                                                // [AAA.001]
}).listen( process.env.PORT );                                  // [AAA.001]


















