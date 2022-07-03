
const l_url = require( "url" );                                 // [AAA.004]
                                                                
require( "http" ).createServer(function(i_ask,i_giv){           // [AAA.001]
                                                                // [AAA.001]
    var sob ={                                                  // [AAA.004]
                                                                // [AAA.004]
        m_ask : i_ask                                           // [AAA.004]
    ,   m_giv : i_giv                                           // [AAA.004]
    ,   m_url : l_url.parse( i_ask.url , 1 ).pathname           // [AAA.004]
                                                                // [AAA.004]
    };;                                                         // [AAA.004]
                                                                // [AAA.004]
    if( "/HELLO" == sob.m_url ){


        i_giv.end( "[F1_BITCH]" );
        

    }else{
        sob.m_giv.end( sob.m_url ); /**F1 BITCH**/                  // [AAA.004]
    };;
                                                                // [AAA.001]
}).listen( process.env.PORT );                                  // [AAA.001]


















