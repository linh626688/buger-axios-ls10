import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../../hoc/Aux'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {error: null}

    componentWillMount()
    {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req
      });
      this.reqInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error})
      });
    }

    errorConfirmHanlder = () => {
      this.setState({error: null})

    };
    componentWillUnmount(){
      console.log('Will Unmount', this.reqInterceptor, this.reqInterceptor)
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.reqInterceptor);
    }
    render()
    {
      return (
          <Aux>
            <Modal
                modalClosed={this.errorConfirmHanlder}
                show={this.state.error}>
              {this.state.error ? this.state.error.message : null}
            </Modal>
            <WrappedComponent {...this.props}/>
          </Aux>
      );
    }
  }
}
export default withErrorHandler;