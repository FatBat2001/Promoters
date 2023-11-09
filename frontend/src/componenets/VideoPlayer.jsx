import ReactPlayer from 'react-player'

const VideoPlayer = ({ url }) => {
    return (
        <div className='' style={{ width: "500px",height: "400px" }}>
            <ReactPlayer 
                className="video-player"
                controls={true}
                playing={true}
                url={url}
                config={{
                    file: {

                    }
                }}
                width='100%'
                height='100%'
            />
        </div>
    )
}

export default VideoPlayer
