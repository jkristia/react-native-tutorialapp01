import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import Markdown from 'react-native-showdown';
import WebView from 'react-native-webview';
import { StatusBar, TouchableOpacity, Dimensions, PixelRatio, Linking } from 'react-native';
import { INavigationProp } from '../navigator/app-navigator';
import { ICard } from '../data';

// https://github.com/react-native-community/react-native-webview

export class SectionScreen extends React.Component<INavigationProp, any> {
	private _webView: WebView;
	render() {
		let url = 'https://github.com/jkristia/';
		let card = this.props.route.params.card as ICard;
		let width = Dimensions.get('window').width; // * PixelRatio.get();
		let height = Dimensions.get('window').height; // * PixelRatio.get();
		return (
			<Container>
				<StatusBar hidden />
				<Cover>
					<Image source={card.image} />
					<Wrapper>
						<Logo source={card.logo} />
						<Subtitle>{card.subtitle} (size {width}, {height})</Subtitle>
					</Wrapper>
					<Title>{card.title}</Title>
					<Caption>{card.caption}</Caption>
				</Cover>
				<TouchableOpacity
					onPress={() => {
						this.props.navigation.goBack();
					}}
					style={{ position: "absolute", top: 20, right: 20 }}
				>
					<CloseView>
						<Ionicons
							name="ios-close"
							size={36}
							color="#4775f2"
							style={{ marginTop: -2 }}
						/>
					</CloseView>
				</TouchableOpacity>
				<Content style={{ height: height - (375 + 85) }}>
					<WebView
						ref={ref => this._webView = ref}
						source={{ uri: url }}
						scalesPageToFit={true}
						onNavigationStateChange={(event) => {
							if (event.url === url) {
								return;
							}
							if (event.url === 'about:blank') {
								return;
							}
							this._webView.stopLoading()
							Linking.openURL(event.url);
						}}
					/>
				</Content>
			</Container>)
	}
}
// source= {{ html: mdContent + htmlStyles}}

export default SectionScreen;

const htmlStyles = `
<style>
	@media h1 {
		font-size: 28px;
		font-family: "Gotham A","Gotham B",Helvetica,sans-serif;
		font-weight: 400;
		font-style: normal;
		letter-spacing: 2px;
		line-height: 40px;
		text-transform: uppercase;
		margin-bottom: 9px;
		padding-bottom: 0;
		margin-left: 0;		
	}
</style>
`;

const mdContent = `
<h1 class="field">Stronger Security with more uptime</h1>
`;



const Content = styled.View`
	/* height: 100%; */
	padding: 0px;
	/* background: green; */
`;

const Container = styled.View`
	flex: 1;
`;

const Cover = styled.View`
	height: 375px;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Title = styled.Text`
	font-size: 24px;
	color: white;
	font-weight: bold;
	width: 170px;
	position: absolute;
	top: 78px;
	left: 20px;
`;

const Caption = styled.Text`
	color: white;
	font-size: 17px;
	position: absolute;
	bottom: 20px;
	left: 20px;
	width: 300px;
`;

const CloseView = styled.View`
	width: 32px;
	height: 32px;
	background: white;
	border-radius: 16px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.View`
	flex-direction: row;
	position: absolute;
	top: 40px;
	left: 20px;
	align-items: center;
`;

const Logo = styled.Image`
	width: 24px;
	height: 24px;
`;

const Subtitle = styled.Text`
	font-size: 15px;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.8);
	margin-left: 5px;
	text-transform: uppercase;
`;

