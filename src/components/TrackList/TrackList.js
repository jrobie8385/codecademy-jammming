import React from "react";
import Track from "../Track/Track.js";
import "./TrackList.css";

class TrackList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="TrackList">
      {
        this.props.tracks.map(track => { //this.props.tracks  NOT this.props.searchResults
          return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>;
        })
      }
      </div>
    );
  }
}

export default TrackList;