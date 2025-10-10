import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { BoardArticle } from '../../libs/dto/board-article/board-article';
import { BoardArticleInput } from '../../libs/dto/board-article/board-article.input';
import { Message } from '../../libs/enums/common.enum';
import { MemberService } from '../member/member.service';
import { ViewService } from '../view/view.service';

@Injectable()
export class BoardArticleService {
	constructor(
		@InjectModel('BoardArticle') private readonly boardArticleModel: Model<BoardArticle>,
		private readonly memberService: MemberService,
		private readonly viewService: ViewService,
	) {}

	public async createBoardArticle(memberId: ObjectId, input: BoardArticleInput): Promise<BoardArticle> {
		input.memberId = memberId; //imputni memberId sini kirib kelgan memberId ga teglashtiryapmiz
		try {
			const result = await this.boardArticleModel.create(input);
			await this.memberService.memberStatsEditor({
				_id: memberId,
				targetKey: 'memberArticles',
				modifier: 1,
			});
			//memberArticle statistikasini bittaga oshiradi

			return result;
		} catch (err) {
			console.log('Error, Service.model:', err.message);
			throw new BadRequestException(Message.CREATE_FAILED);
		}
	}
}
