import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import b3 from './b3.jpg';
import './Products.css';

function Products() {
  return (
  <div className='bgimage'>
    
    <div className='Products'>
      <div>
        <p>
          Note: Please Choose any one fruit from every option.
        </p>
      </div>
      <Form.Select aria-label="Default select example" >
      <option>Choose your Fruits</option>
      <option value="1">Apple</option>
      <option value="2">Banana</option>
      <option value="3">Pineapple</option>
      <option value="4">kiwi</option>
      <option value="5">Dragon</option>
      <option value="6">kiwi</option>
      <option value="7">Watermelon</option>
      <option value="8">Strawberry</option>
      <option value="9">Grapes</option>
      <option value="10">Orange</option>
      </Form.Select>    
      <Form.Select aria-label="Default select example" >
      <option>Choose your Fruits</option>
      <option value="1">Apple</option>
      <option value="2">Banana</option>
      <option value="3">Pineapple</option>
      <option value="4">kiwi</option>
      <option value="5">Dragon</option>
      <option value="6">kiwi</option>
      <option value="7">Watermelon</option>
      <option value="8">Strawberry</option>
      <option value="9">Grapes</option>
      <option value="10">Orange</option>
      </Form.Select>
      <Form.Select aria-label="Default select example" >
      <option>Choose your Fruits</option>
      <option value="1">Apple</option>
      <option value="2">Banana</option>
      <option value="3">Pineapple</option>
      <option value="4">kiwi</option>
      <option value="5">Dragon</option>
      <option value="6">kiwi</option>
      <option value="7">Watermelon</option>
      <option value="8">Strawberry</option>
      <option value="9">Grapes</option>
      <option value="10">Orange</option>
      </Form.Select>
      <Form.Select aria-label="Default select example" >
      <option>Choose your Fruits</option>
      <option value="1">Apple</option>
      <option value="2">Banana</option>
      <option value="3">Pineapple</option>
      <option value="4">kiwi</option>
      <option value="5">Dragon</option>
      <option value="6">kiwi</option>
      <option value="7">Watermelon</option>
      <option value="8">Strawberry</option>
      <option value="9">Grapes</option>
      <option value="10">Orange</option>
      </Form.Select>

      <Form.Select aria-label="Default select example" >
      <option>Choose your Fruits</option>
      <option value="1">Apple</option>
      <option value="2">Banana</option>
      <option value="3">Pineapple</option>
      <option value="4">kiwi</option>
      <option value="5">Dragon</option>
      <option value="6">kiwi</option>
      <option value="7">Watermelon</option>
      <option value="8">Strawberry</option>
      <option value="9">Grapes</option>
      <option value="10">Orange</option>
      </Form.Select>

      
      {/* Quantity button */}
      <div className="radio-container">
        <label>
          Choose your Favourite Bowl:
        </label>
        <div className="radio-options">
          <label>
            <input type="radio" name="quantity" value="Small" /> Small
          </label>
          <label>
            <input type="radio" name="quantity" value="Medium" /> Medium
          </label>
          <label>
            <input type="radio" name="quantity" value="Large" /> Large
          </label>
        </div>
        <label className="radio-container">
          Note : Small Bowl Contains 5 pieces of each fruit.
          Medium Bowl Contains 10 pieces of each fruit.
          Large Bowl Contains 15 pieces of each fruit.
        </label>
      </div>

      {/* submit Button */}
      <div>
        <Button type="submit">Create my bowl</Button>
      </div>  
    </div>
    
</div>
   

  );
}

export default Products;