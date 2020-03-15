import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

import MasterLayout from 'src/layouts/MasterLayout/MasterLayout'

const HomePage = () => {
  return (
    <MasterLayout>
      <BlogLayout>
        <BlogPostsCell />
      </BlogLayout>
    </MasterLayout>
  )
}

export default HomePage
