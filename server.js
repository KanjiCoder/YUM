 

    const l_url = require( "url" );

    require( "http" ).createServer(function(i_ask,i_giv){       // [AAA.001]
                                                                // [AAA.001]
        var sob ={

            m_ask : i_ask
        ,   m_giv : i_giv
        ,   m_url = l_url.parse( i_ask.url , 1 ).pathname

        };;

        sob.i_giv.end( sob.m_url );
                                                                // [AAA.001]
    }).listen( process.env.PORT );                              // [AAA.001]


















