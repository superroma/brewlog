
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
var BatchList = React.createClass({
    propTypes: { batches:React.PropTypes.array},
    getInitialState: function(){
        return {
            batches: (this.props.batches || [
                {name:"Oatmeal Stout", date:"12.03.2016"},
                {name:"Blind Pig IPA", date: "01.02.2016"}
            ])
        };
    },
    onBatch: function(batch) {
        this.state.batches.push(batch);
        this.setState({batches: this.state.batches})
    },
    render:function() {
        var batches = this.state.batches.map(function(batch){
           return <Batch key={batch.name} name={batch.name} date={batch.date}/> 
        });
        
        return (
            <div className="list-group">
                {batches}
            </div>
        )
    }
})


ReactDOM.render( <BatchList/>, 
    document.getElementById('view')
);