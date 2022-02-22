import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const field = () => {

    return(
       <div>
       <div ref={ref}>
              <form>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
         </label>
         <label>
         <p>Father Name</p>
         <input father name="name"/>
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form> 
        </div>
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
        </div>
        </div>        
    );
}

export default field;