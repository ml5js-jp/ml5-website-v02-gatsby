import * as React from "react"
import Layout from "../layout/Layout"
import Hero from '../layout/Hero'
import ScrollDownIndicator from "../components/ScrollDownIndicator";
import ProjectBox from "../components/ProjectBox";
import TextBox from "../components/TextBox";
import ModelIntroBox from "../components/ModelIntroBox";
import Spacer from "../components/Spacer";
import IframeBgComponent from "../components/IframeBgComponent";
import TextQuoted from "../components/TextQuoted";
import Button from "../components/Button";
import AnnouncementBanner from "../components/AnnouncementBanner";
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
	const projects = data.allMarkdownRemark.nodes
	projects.sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));

	const styles = {
		flexContainer: {
			// backgroundColor: 'cyan',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'flex-start',
			flexWrap: 'wrap',
			textAlign: 'center',
			gap: '1.2rem',
			margin: '1rem auto',
		},
	};

	return (
		// if you plan to update header or footer, check the "Layout.js" file in "layout" folder.
		<Layout>
			<IframeBgComponent />

			<AnnouncementBanner
				emoji="📢"
				// messageHtml="Welcome to our new website! We’ve launched a new version of ml5.js with breaking changes. If you encounter errors such as <i style='color:#F66'>'... is not a function'</i> or need features that are no longer available, please refer to <a href='https://docs.ml5js.org/#/welcome/faq?id=what-happened-to-older-ml5js-releases' target='_self'>our FAQ</a> for how to access the previous version and documentation."
				messageHtml="新しいウェブサイトへようこそ！私たちは新しいバージョンのml.5jsをリリースしました．これには，互換性のない変更が含まれています．もし，<i style='color:#F66'>'... is not a function'</i>などのエラーに遭遇した場合や，使用できなくなった機能が必要な場合，<a href='https://docs.ml5js.org/#/welcome/faq?id=what-happened-to-older-ml5js-releases' target='_self'> FAQ</a>を確認して以前のバージョンとドキュメントにアクセスする方法について参考にしてください"
			/>

			<section aria-label="Hero">
				<Hero
					// title="Friendly Machine Learning for the Web"
					// subtitle="A neighborly approach to creating and exploring artificial intelligence in the browser."

					title="Webのためのフレンドリーな機械学習"
                    subtitle="ブラウザ上で人工知能を創り、気軽に探究するための、優しく寄り添うアプローチ"
					// title="Web向けの触れやすい機械学習"
					// subtitle="ブラウザで人工知能を作成・探求する触れやすいアプローチ"
				/>
				<ScrollDownIndicator />
			</section>
			<Spacer height="5rem" />

			<section aria-label="Introduction to ml5.js">
				<div style={styles.flexContainer}>
					{/* <h1>Why ml5.js?</h1> */}
					<h1>なぜml5.js?</h1>
				</div>
				{/* <TextQuoted content="More Approachable Machine Learning for the Web" /> */}
				<TextQuoted content="Web上で動く使いやすい機械学習" />
				<TextBox
					// content="ml5.js aims to make machine learning approachable for a broad audience of artists, creative coders, and students. The library provides access to machine learning algorithms and models in the browser, building on top of TensorFlow.js with no other external dependencies."
					content="ml5.jsは学生やエンジニア，アーティストなどの幅広い人々に向け,より機械学習に触れやすくすることを目的にしています．このライブラリはtensorFlow.jsを基盤としており，その他の外部依存関係なくブラウザ上で機械学習アルゴリズムやモデルにアクセスを提供しています．"
					maxWidth="85%"
				/>
				<Spacer height="5rem" />
				<div style={styles.flexContainer}>
					{/* <h1>What we can do with ml5.js?</h1> */}
					<h1>ml5.jsで何ができるの？</h1>
				</div>
				<div style={styles.flexContainer}>
					<ModelIntroBox
						title="BodyPose"
						// description="Full-body pose estimation"
						description="全身の姿勢推定"
						imageURL="images/homepage-icon-bodypose.png"
						linkURL="https://docs.ml5js.org/#/reference/bodypose"
					/>
					<ModelIntroBox
						title="HandPose"
						// description="Hand-skeleton finger tracking"
						description="手の骨格や指のトラッキング"
						imageURL="images/homepage-icon-handpose.png"
						linkURL="https://docs.ml5js.org/#/reference/handpose"
					/>
					<ModelIntroBox
						title="FaceMesh"
						// description="Facial landmark detection"
						description="顔のランドマーク検出"
						imageURL="images/homepage-icon-facemesh.png"
						linkURL="https://docs.ml5js.org/#/reference/facemesh"
					/>
					<ModelIntroBox
						title="ImageClassifier"
						// description="Image content recognition"
						description="画像の内容認識"
						imageURL="images/homepage-icon-image-classifier.png"
						linkURL="https://docs.ml5js.org/#/reference/image-classifier"
					/>
					<ModelIntroBox
						title="SoundClassifier"
						// description="Audio detection and classification"
						description="音声の検出と認識"
						imageURL="images/homepage-icon-sound-classifier.png"
						linkURL="https://docs.ml5js.org/#/reference/sound-classifier"
					/>
					<ModelIntroBox
						title="ml5 NeuralNetwork"
						// description="Train your own neural networks"
						description="独自のニューラルネットワークの訓練"
						imageURL="images/homepage-icon-neural-network.png"
						linkURL="https://docs.ml5js.org/#/reference/neural-network"
					/>
				</div>
				<div style={styles.flexContainer}>
					<Button
						// children="Learn More"
						children="さらに学ぶ"
						url="https://docs.ml5js.org/#/reference/overview"
						fontSize="1.1rem"
						borderStyle="solid"
						padding="0.5rem 1.0rem"
						margin="1.5rem 0"
					/>
				</div>
			</section>

			<Spacer height="5rem" />

			<section aria-label="Featured Projects">
				<div style={styles.flexContainer}>
					{/* <h1>Discover the creative possibilities of machine learning!</h1> */}
					<h1>機械学習のクリエイティブな可能性を見つけ出そう！</h1>
				</div>
				<div style={styles.flexContainer}>
					{projects.map((project) => (
						<ProjectBox
							linkURL={project.frontmatter.externalLink}
							imageURL={project.frontmatter.image}
							title={project.frontmatter.title}
							author={project.frontmatter.author}
							tags={project.frontmatter.tags}
							width="20.4rem"
						/>
					))}
					<Spacer height="2rem" />
				</div>
			</section>
		</Layout>
	);
};

export { Head } from '../components/Head';



export default IndexPage;

// GraphQL
export const query = graphql`
  query CommunityQuery {
    allMarkdownRemark(
      filter: { frontmatter: { featuredPost: { eq: true } } }
    ) {
      nodes {
        id
        frontmatter {
          templateKey
          title
          author
          image
          externalLink
          featuredPost
          date
          tags
        }
      }
    }
  }
`
