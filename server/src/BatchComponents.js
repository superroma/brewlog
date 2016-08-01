import React, {PropTypes} from 'react'

const Edit = (props) => (
  <div className="form-group row">
    <label htmlFor={props.inputId} className="col-sm-2 col-form-label">
      {props.labelText}
    </label>
    <div className="col-sm-10">
      <input className="form-control"
        type={props.inputType} id={props.inputId} value={props.value} />
    </div>
  </div>
)
Edit.propTypes = {
  inputType: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export const BatchMain = () => (
  <form>
      <legend>London Pride 3.0 </legend>
      <Edit inputType="text" labelText="Name" inputId="batch-name" value="London Pride" />

      <Edit inputType="number" labelText="Batch Size" inputId="batch-size-input"
        value="40" />
      <Edit inputType="number" labelText="Boil Time" inputId="batch-boil-time" value="60" />
      <Edit inputType="date" labelText="Date" inputId="batch-date" value="2015-12-25" />
      <Edit inputType="number" labelText="Version" inputId="batch-version" value="3.0" />
  </form>
)

export const BatchRecipe = (props) => (
  <div className="list-group">
    {props.recipe.map(
      (item) => (
        <BatchRecipeItem key={item.key} {...item} />
      )
    )}
  </div>
)
BatchRecipe.propTypes={recipe: PropTypes.array.isRequired}

export const BatchRecipeItem = (props) => (

  <a href="#" className="list-group-item">
    <div className="row">
      <span className="col-sm-2">{props.amount}</span>
      <span className="col-sm-6">{props.name}</span>
      <span className="col-sm-2">{props.type}</span>
      <span className="col-sm-2">{props.info}</span>
    </div>
  </a>
)
BatchRecipeItem.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
}