import "./TrackList.css";

import Track from "../Track/Track";

const TrackList = (props) => {
  return (
    <div className="TrackList">
      {props.tracks &&
        props.tracks.length > 0 &&
        props.tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            isRemoval={props.isRemoval}
          />
        ))}
    </div>
  );
};

export default TrackList;