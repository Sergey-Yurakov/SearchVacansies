import './Header.css';

function Header() {
    return(
        <div>
            <h1>List of vacancies</h1>
           <div className='header-container'>

               <div className='header-container__select'>
                    <p>Form</p>
                   <p>
                       <select>
                           <option value='full time'>Full time</option>
                           <option value='half time'>Half time</option>
                           <option value='part time'>Part time</option>
                       </select>
                   </p>
               </div>

               <div className='header-container__input'>
                    <p>Position</p>
                   <p>
                       <input type='text' placeholder='Unspecified'/>
                   </p>
               </div>

               <div className='header-container__clearSort'>
                   <p>Clear sorting
                       <span>&times;</span>
                   </p>
               </div>

           </div>
        </div>
    );
}

export default Header;