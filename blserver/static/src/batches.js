var brewApi = (function() {
    var baseURL = "/api";
    
    return {
        getBatches: function(query) {
            return $.ajax({
                url: baseURL + "/batches", 
                data: query
            })
        },
        createBatch: function(batch) {
            return $.ajax({
                method: 'POST',
                url: baseURL + "/batches", 
                data: JSON.stringify(batch),
                contentType: 'application/json',
                dataType: 'json'
            })
        }
    }
}());


var Batch = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        date: React.PropTypes.string.isRequired
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            date: this.props.date
        };
    },
    linkHandler: function (e) {
        return false;
    },
    render: function() {
        return (
                <a href="#" className="list-group-item">
                    <span className="" >{this.props.name}</span>
                    <span className="badge">{this.props.date}</span>
                </a>

        );
    }

});

var BatchForm = React.createClass({
    propTypes: {
        onNewBatch: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return {
            name: '',
            date: ''
        }
    },
    changeName: function(ev) {
        this.setState({
            name: ev.target.value
        })
    },
    changeDate: function(ev) {
        this.setState({
            date: ev.target.value
        })
    },
    addBatch: function(ev) {
        ev.preventDefault();
        
        this.props.onNewBatch({
            name: this.state.name,
            date: this.state.date
        });
        this.setState({
            name: '',
            date: ''
        });
    },
    render: function() {
        return (
            <p>
            <form role='form'  onSubmit={this.addBatch}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' className='form-control' id='name' value={this.state.name} onChange={this.changeName} placeholder='Name'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='date'>Date:</label>
                    <input type='text' className='form-control' id='date' value={this.state.date} onChange={this.changeDate} placeholder='Date'/>
                </div>
                <button type='submit' className='btn btn-default'>Start New Batch</button>
            </form>
            </p>
        )
    }
})


var BatchList = React.createClass({
    propTypes: { batches:React.PropTypes.array},
    getInitialState: function(){
        return {
            batches: (this.props.batches || [])
        };
    },
    componentDidMount: function() {
        this.getBatches();
    },
    getBatches: function() {
        brewApi.getBatches({}).done(function(data) {
            if(data && data.batches){
                this.setState({
                    batches: data.batches
                });
            } else {
                console.log("bad ajax response");
                console.log(data);
            }
        }.bind(this));
    },
    onNewBatch: function(batch) {
        brewApi.createBatch(batch).done(function(data){
            if(data && data.batches){
                this.setState({
                    batches: data.batches
                });
            } else {
                console.log("bad ajax response");
                console.log(data);
            }
        }.bind(this));
        //this.state.batches.push(batch);
        //this.setState({batches: this.state.batches})
    },
    render:function() {
        var batches = this.state.batches.map(function(batch){
           return <Batch key={batch.name} name={batch.name} date={batch.date}/> 
        });
        
        return (
            <div>
            <BatchForm onNewBatch={this.onNewBatch} />
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Batches</h3>
                </div>
                <div className="list-group">
                    {batches}
                </div>
            </div>
            </div>
        )
    }
});


ReactDOM.render( <BatchList/>, 
    document.getElementById('view')
);