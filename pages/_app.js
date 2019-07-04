import React from "react";
import initStore from "../lib/initRedux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import ResponsiveDrawer from '../components/ResponsiveDrawer';

class MyApp extends App {
    
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
    }
    
    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <ResponsiveDrawer>
                        <Component {...pageProps} />
                    </ResponsiveDrawer>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(initStore)(MyApp);