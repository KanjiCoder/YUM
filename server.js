    


    require( "http" ).createServer(function(i_ask,i_giv){       // [AAA.001]
                                                                // [AAA.001]
        i_giv.end( "hello world" );                             // [AAA.001]
                                                                // [AAA.001]
    }).listen( process.env.PORT );                              // [AAA.001]