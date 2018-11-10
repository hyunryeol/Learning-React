import React,{Coponent} from 'react';
// 조건부 렌더링
class App extends Comment{
    render(){
        return(
            <div>
                {
                    1+1===2
                    ?(<div>맞아요!</div>)
                    :(<div>틀려요!</div>)
                }
            </div>
        )
    };
}
export default App;