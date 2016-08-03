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
const Select = ({inputId, labelText, items, value}) => (
  <div className="form-group row">
    <label htmlFor={inputId} className="col-sm-2 col-form-label">{labelText}</label>
    <div className="col-sm-10">
      <select className="form-control" id={inputId} value={value}>
        {items.map((item, i) => (<option value={i}>{item}</option>))}
      </select>
    </div>
  </div>
)
Select.propTypes = {
  items: PropTypes.array.isRequired,
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
      <Select inputId="batch-equipment" labelText="Equipment" items={
        ["Euro keg 50L - All Grain","Pot 5 Gal/19L) - Extract"]
      } value="0" />
  </form>
)

export const BatchRecipe = ({recipe}) => (
  <div className="row">
    <div className="list-group col-xs-12 col-lg-10">
      {recipe.map(
        (item) => (
          <BatchRecipeItem key={item.key} {...item} />
        )
      )}
    </div>
    <div className="col-xs-12 col-lg-2">
      <button type="button" className="btn btn-secondary">Add</button>
      <button type="button" className="btn btn-secondary">Delete</button>
      <button type="button" className="btn btn-secondary">Substitute</button>
    </div>
  </div>
)
BatchRecipe.propTypes={recipe: PropTypes.array.isRequired}

export const BatchRecipeItem = ({amount, name, type, info}) => (

  <a href="#" className="list-group-item">
    <div className="row">
      <span className="col-sm-2">{amount}</span>
      <span className="col-sm-6">{name}</span>
      <span className="col-sm-2">{type}</span>
      <span className="col-sm-2">{info}</span>
    </div>
  </a>
)
BatchRecipeItem.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
}

const Value = ({labelText, value}) => (
  <div className="row">
    <span className="col-sm-3">{labelText}</span>
    <span className="col-sm-2">{value}</span>
  </div>
)

export const BatchStyle = () => (
  <div className="form-group">
    <Value labelText="Est Original Gravity" value="11.2 Plato"/>
    <Value labelText="Bitterness" value="30.4 IBU" />
    <Value labelText="Color" value="18.4 EBC" />
    <Value labelText="Est ABV" value="4.0%" />
    <Value labelText="Total Grains" value="7.7 kg" />
    <Value labelText="Total Hops" value="110 g" />
    <Value labelText="Est Pre-Boil Gravity" value="10.36 Plato" />
  </div>
)