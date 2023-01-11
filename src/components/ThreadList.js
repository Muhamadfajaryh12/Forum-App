import React from "react";
import ThreadItemBody,{threadItemBodyShape} from "./ThreadItemBody";
import PropTypes from 'prop-types';
function ThreadList({threads}){
    return(
        <div className="thread-list">
            {
                       threads.length?
                       threads.map((thread)=>(
                           <ThreadItemBody
                           key={thread.id}
                           id={thread.id}
                           {...thread}
                           />
                       ))  
                       : "Tidak ada Thread"
            }
        </div>
    )
}
ThreadList.propTypes = {
    threads: PropTypes.arrayOf(PropTypes.shape(threadItemBodyShape)).isRequired,
  };
export default ThreadList