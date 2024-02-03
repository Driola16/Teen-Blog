document.addEventListener('DOMContentLoaded', function () {
    const blogPostsContainer = document.getElementById('blog-posts');
    const newPostButton = document.getElementById('new-post-btn');
    const postModal = document.getElementById('post-modal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const savePostBtn = document.getElementById('save-post-btn');
    const postTitleInput = document.getElementById('post-title');
    const postContentInput = document.getElementById('post-content');

    // Dummy data for initial blog posts
    const posts = [
        { title: 'My First Post', content: 'Hello, this is my first blog post!' },
        { title: 'A Day in My Life', content: 'Today was an exciting day. I did...' }
        // Add more posts as needed
    ];

    // Function to display blog posts
    function displayPosts() {
        blogPostsContainer.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('article');
            postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
            blogPostsContainer.appendChild(postElement);
        });
    }

    // Event listener for the "New Post" button
    newPostButton.addEventListener('click', function () {
        postModal.style.display = 'block';
    });

    // Event listener for the close button on the modal
    closeBtn.addEventListener('click', function () {
        postModal.style.display = 'none';
    });

    // Event listener for the Save Post button
    savePostBtn.addEventListener('click', function () {
        const title = postTitleInput.value;
        const content = postContentInput.value;
        posts.push({ title, content });
        displayPosts();
        postModal.style.display = 'none';
        // Clear input fields
        postTitleInput.value = '';
        postContentInput.value = '';
    });

    // Initial display of blog posts
    displayPosts();
});
