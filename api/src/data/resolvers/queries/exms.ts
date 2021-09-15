import { Exms } from '../../../db/models';

const exmQueries = {
  async exms(_root, args: any) {
    return {
      list: await Exms.find(args).sort({ createdAt: -1 }),
      totalCount: await Exms.countDocuments()
    };
  },

  exmDetail(_root, { _id }: { _id: string }) {
    return Exms.findOne({ _id });
  },

  exmGetLast() {
    return Exms.findOne().sort({ createdAt: -1 });
  }
};

export default exmQueries;