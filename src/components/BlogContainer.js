import "./BlogContainer.css"

const array = [
    {
        title: "adipisicing ad fugiat",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend enim enim, ut dapibus mi lobortis sed. Vestibulum accumsan"
    },
    {
        title: "est est consectetur",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend enim enim, ut dapibus mi lobortis sed. Vestibulum accumsan lorem"
    },
    {
        title: "quis venam pariatur",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend enim enim, ut dapibus mi lobortis sed. Vestibulum accumsan lorm ipsum"
    },
    {
        title: "aliquip dolore laborum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend enim enim, ut dapibus mi lobortis sed. Vestibulum accumsan lorem ipsum sit"
    },
    {
        title: "ea ad et",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend enim enim, ut dapibus mi lobortis sed. Vestibulum accumsan"
    },
    {
        title: "pariatur ullamco eiusmod",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend enim enim, ut dapibus mi lobortis sed. Vestibulum accumsan lorem"
    },
];

const mapArray = array.map((item, index) => {
    return <div className="list-item" key={index}><h4> {item.title} </h4>
        <p> {item.text} </p>
    </div>
})

const BlogContainer = () => {
    return <div className="wrapper">
        <div className="title">My React Blog</div>
        {mapArray} </div>
};

export default BlogContainer;